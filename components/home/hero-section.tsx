import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your One-Stop <span className="text-primary">Legal</span> Solution
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with qualified advocates, access comprehensive law library,
            and get expert legal consultation all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/client/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Find an Advocate
              </Button>
            </Link>
            <Link href="/advocate/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent"
              >
                Join as Advocate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
