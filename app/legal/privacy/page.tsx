export const metadata = {
    title: "Privacy Policy | Clenja Tech",
    description: "Privacy Policy for Clenja Tech Ltd."
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col items-center pb-24">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
                    <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="w-full pt-16 px-4 md:px-8">
                <div className="container max-w-4xl mx-auto space-y-8 text-muted-foreground prose prose-invert prose-p:leading-relaxed max-w-none">
                    <p>
                        At Clenja Tech Ltd ("Clenja", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information from and about users of our Website, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Data:</strong> Name, email address, company name, telephone number, or any other identifier by which you may be contacted online or offline.</li>
                        <li><strong>Automatic Data:</strong> IP addresses, browser type, operating system, and information collected through cookies, web beacons, and other tracking technologies.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use information that we collect about you or that you provide to us, including any personal information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information, products, or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it, such as processing a contact request or support ticket.</li>
                        <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Security</h2>
                    <p>
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Changes to Our Privacy Policy</h2>
                    <p>
                        It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:privacy@clenjatech.com" className="text-primary hover:underline">privacy@clenjatech.com</a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
