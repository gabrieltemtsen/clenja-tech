export const metadata = {
    title: "Terms of Service | Clenja Tech",
    description: "Terms of Service for Clenja Tech Ltd."
};

export default function TermsOfServicePage() {
    return (
        <div className="flex flex-col items-center pb-24">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
                    <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="w-full pt-16 px-4 md:px-8">
                <div className="container max-w-4xl mx-auto space-y-8 text-muted-foreground prose prose-invert prose-p:leading-relaxed max-w-none">
                    <p>
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the clenjatech.com website (the "Service") operated by Clenja Tech Ltd ("us", "we", or "our").
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Conditions of Use</h2>
                    <p>
                        We will provide our services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features and functionality are and will remain the exclusive property of Clenja Tech Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of both the Federal Republic of Nigeria and foreign countries.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Accounts</h2>
                    <p>
                        When you create an account with us through our Client Portal, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Links To Other Web Sites</h2>
                    <p>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by Clenja Tech Ltd.
                    </p>
                    <p>
                        Clenja Tech Ltd has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Clenja Tech Ltd shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                    </p>
                </div>
            </section>
        </div>
    );
}
