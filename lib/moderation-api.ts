/**
 * Moderation API Utilities
 * Helper functions for content moderation and abuse reporting
 */

export interface AbuseReport {
  id?: string;
  contentId: string | number;
  contentType: 'question' | 'answer' | 'case' | 'comment';
  reportedBy?: string; // User ID (empty if anonymous)
  reason: string;
  details?: string;
  timestamp: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  reviewedBy?: string;
  reviewNotes?: string;
  reviewedAt?: string;
}

export interface FlaggedContent {
  contentId: string | number;
  contentType: string;
  flagCount: number;
  reports: AbuseReport[];
  status: 'active' | 'under_review' | 'hidden' | 'removed';
  autoFlagged: boolean;
  profanityDetected: boolean;
}

/**
 * Submit an abuse report
 */
export async function submitAbuseReport(
  report: Omit<AbuseReport, 'id' | 'status' | 'timestamp'>
): Promise<{ success: boolean; reportId?: string; error?: string }> {
  try {
    const response = await fetch('/api/moderation/report-abuse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...report,
        timestamp: new Date().toISOString(),
        status: 'pending',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit report');
    }

    const data = await response.json();
    return { success: true, reportId: data.reportId };
  } catch (error) {
    console.error('Error submitting abuse report:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Get flagged content for moderation
 */
export async function getFlaggedContent(
  filters?: {
    contentType?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }
): Promise<{ success: boolean; data?: FlaggedContent[]; error?: string }> {
  try {
    const queryParams = new URLSearchParams();
    if (filters?.contentType) queryParams.append('contentType', filters.contentType);
    if (filters?.status) queryParams.append('status', filters.status);
    if (filters?.limit) queryParams.append('limit', filters.limit.toString());
    if (filters?.offset) queryParams.append('offset', filters.offset.toString());

    const response = await fetch(`/api/moderation/flagged-content?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch flagged content');
    }

    const data = await response.json();
    return { success: true, data: data.flaggedContent };
  } catch (error) {
    console.error('Error fetching flagged content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Update report status (for moderators)
 */
export async function updateReportStatus(
  reportId: string,
  updates: {
    status: AbuseReport['status'];
    reviewNotes?: string;
    reviewedBy: string;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`/api/moderation/reports/${reportId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...updates,
        reviewedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update report status');
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating report status:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Moderate content (hide, remove, or restore)
 */
export async function moderateContent(
  contentId: string | number,
  contentType: string,
  action: 'hide' | 'remove' | 'restore',
  moderatorId: string,
  reason?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/moderation/moderate-content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contentId,
        contentType,
        action,
        moderatorId,
        reason,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to moderate content');
    }

    return { success: true };
  } catch (error) {
    console.error('Error moderating content:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Send email notification to moderators
 */
export async function notifyModerators(
  report: AbuseReport,
  content: {
    title?: string;
    excerpt?: string;
    url?: string;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/moderation/notify-moderators', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        report,
        content,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send notification');
    }

    return { success: true };
  } catch (error) {
    console.error('Error notifying moderators:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Get moderation statistics
 */
export async function getModerationStats(
  period: 'day' | 'week' | 'month' = 'week'
): Promise<{
  success: boolean;
  data?: {
    totalReports: number;
    pendingReports: number;
    resolvedReports: number;
    autoFlagged: number;
    manualReports: number;
    contentRemoved: number;
    contentRestored: number;
  };
  error?: string;
}> {
  try {
    const response = await fetch(`/api/moderation/stats?period=${period}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch moderation stats');
    }

    const data = await response.json();
    return { success: true, data: data.stats };
  } catch (error) {
    console.error('Error fetching moderation stats:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
