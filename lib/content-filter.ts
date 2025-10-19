/**
 * Content Filtering Utility
 * Provides profanity detection and content moderation for user-generated content
 */

// English profanity words (common offensive terms)
const englishProfanity = [
  // Explicit profanity
  'fuck', 'shit', 'bitch', 'bastard', 'asshole', 'ass', 'damn', 'hell',
  'cunt', 'dick', 'cock', 'piss', 'slut', 'whore', 'fag', 'nigger',
  'motherfucker', 'pussy', 'retard', 'douche', 'tits', 'boobs',
  
  // Variations and leetspeak
  'f*ck', 'f@ck', 'fck', 'fuk', 'sh!t', 'sh1t', 'b!tch', 'b1tch',
  'a$$', 'a$$hole', 'd!ck', 'd1ck', 'p!ss', 'p1ss', 'sl@t', 'wh0re',
];

// Hindi profanity words (transliterated)
const hindiProfanity = [
  'chutiya', 'madarchod', 'bhenchod', 'chod', 'gandu', 'harami',
  'kamina', 'kutta', 'kutti', 'sala', 'saala', 'randi', 'bc', 'mc',
  'bsdk', 'lund', 'gaand', 'behen', 'maa', 'baap',
];

// Regional Indian language profanity (transliterated)
const regionalProfanity = [
  // Tamil
  'punda', 'panni', 'thevidiya', 'sunni', 'oombu',
  // Telugu
  'dengu', 'gudda', 'kodaka', 'lanjakoduku',
  // Kannada
  'bekku', 'thika', 'nayi', 'kelu',
  // Malayalam
  'thendi', 'poori', 'kunna', 'myru',
  // Marathi
  'ghati', 'zhavli', 'pichli',
  // Bengali
  'magir', 'chudi', 'bal', 'boka',
  // Punjabi
  'panchod', 'kanjara', 'kutti',
];

// Controversial/sensitive terms
const controversialTerms = [
  'rape', 'murder', 'kill', 'death', 'bomb', 'terror', 'jihad',
  'assassinate', 'suicide', 'weapon', 'drug', 'cocaine', 'heroin',
];

// Combined list
const allProfanity = [
  ...englishProfanity,
  ...hindiProfanity,
  ...regionalProfanity,
];

/**
 * Normalize text for better matching
 * - Convert to lowercase
 * - Remove special characters but keep spaces
 * - Handle common substitutions (@ for a, 1 for i, 3 for e, 0 for o, $ for s)
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/@/g, 'a')
    .replace(/1|!/g, 'i')
    .replace(/3/g, 'e')
    .replace(/0/g, 'o')
    .replace(/\$/g, 's')
    .replace(/[^\w\s]/g, ''); // Remove special chars except word chars and spaces
}

/**
 * Create regex patterns for profanity detection
 * Handles variations with or without spaces/special chars between letters
 */
function createProfanityPattern(word: string): RegExp {
  const escapedWord = word
    .split('')
    .map(char => `${char}[\\W_]*`)
    .join('');
  return new RegExp(`\\b${escapedWord}`, 'gi');
}

/**
 * Check if text contains profanity
 * @param text - The text to check
 * @param strictMode - If true, also checks controversial terms
 * @returns Object with isProfane flag and matched words
 */
export function containsProfanity(
  text: string,
  strictMode: boolean = false
): {
  isProfane: boolean;
  matchedWords: string[];
  severity: 'high' | 'medium' | 'low';
} {
  const normalizedText = normalizeText(text);
  const matchedWords: string[] = [];
  
  // Check against profanity list
  allProfanity.forEach(word => {
    const pattern = createProfanityPattern(word);
    if (pattern.test(normalizedText)) {
      matchedWords.push(word);
    }
  });

  // Check controversial terms in strict mode
  if (strictMode) {
    controversialTerms.forEach(term => {
      const pattern = new RegExp(`\\b${term}\\b`, 'gi');
      if (pattern.test(normalizedText)) {
        matchedWords.push(term);
      }
    });
  }

  // Determine severity
  let severity: 'high' | 'medium' | 'low' = 'low';
  if (matchedWords.length > 0) {
    const hasExplicit = matchedWords.some(word => 
      englishProfanity.slice(0, 16).includes(word) || 
      hindiProfanity.slice(0, 10).includes(word)
    );
    const hasControversial = matchedWords.some(word => 
      controversialTerms.includes(word)
    );
    
    if (hasControversial) {
      severity = 'high';
    } else if (hasExplicit) {
      severity = 'high';
    } else if (matchedWords.length >= 3) {
      severity = 'medium';
    } else {
      severity = 'low';
    }
  }

  return {
    isProfane: matchedWords.length > 0,
    matchedWords,
    severity,
  };
}

/**
 * Sanitize text by replacing profanity with asterisks
 * @param text - The text to sanitize
 * @returns Sanitized text
 */
export function sanitizeText(text: string): string {
  let sanitized = text;
  
  allProfanity.forEach(word => {
    const pattern = createProfanityPattern(word);
    sanitized = sanitized.replace(pattern, match => '*'.repeat(match.length));
  });

  return sanitized;
}

/**
 * Validate content before posting
 * @param content - Object containing title, description, and other text fields
 * @param strictMode - Enable strict checking
 * @returns Validation result with details
 */
export function validateContent(
  content: {
    title?: string;
    description?: string;
    [key: string]: any;
  },
  strictMode: boolean = true
): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  blockedFields: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  const blockedFields: string[] = [];

  // Check title
  if (content.title) {
    const titleCheck = containsProfanity(content.title, strictMode);
    if (titleCheck.isProfane) {
      if (titleCheck.severity === 'high') {
        errors.push('Title contains offensive or inappropriate language');
        blockedFields.push('title');
      } else {
        warnings.push('Title may contain questionable language');
      }
    }
  }

  // Check description
  if (content.description) {
    const descCheck = containsProfanity(content.description, strictMode);
    if (descCheck.isProfane) {
      if (descCheck.severity === 'high') {
        errors.push('Description contains offensive or inappropriate language');
        blockedFields.push('description');
      } else {
        warnings.push('Description may contain questionable language');
      }
    }
  }

  // Check other text fields
  Object.entries(content).forEach(([key, value]) => {
    if (
      typeof value === 'string' && 
      key !== 'title' && 
      key !== 'description' &&
      value.length > 0
    ) {
      const fieldCheck = containsProfanity(value, strictMode);
      if (fieldCheck.isProfane && fieldCheck.severity === 'high') {
        errors.push(`Field "${key}" contains offensive language`);
        blockedFields.push(key);
      }
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    blockedFields,
  };
}

/**
 * Get user-friendly error message
 */
export function getProfanityErrorMessage(severity: 'high' | 'medium' | 'low'): string {
  switch (severity) {
    case 'high':
      return 'Your content contains offensive or inappropriate language and cannot be posted. Please review and remove any profanity or controversial terms.';
    case 'medium':
      return 'Your content may contain inappropriate language. Please review before posting.';
    case 'low':
      return 'Please ensure your content is professional and appropriate.';
    default:
      return 'Please review your content for appropriateness.';
  }
}
