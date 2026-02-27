export const metadata = {
    title: "Cookie Policy | Clenja Tech",
    description: "Cookie Policy for Clenja Tech Ltd."
};

export default function CookiePolicyPage() {
    return (
        <div className="flex flex-col items-center pb-24">
            <section className="w-full pt-20 pb-16 px-4 bg-card/30 border-b border-border/40">
                <div className="container max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Cookie Policy</h1>
                    <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
            </section>

            <section className="w-full pt-16 px-4 md:px-8">
                <div className="container max-w-4xl mx-auto space-y-8 text-muted-foreground prose prose-invert prose-p:leading-relaxed max-w-none">
                    <p>
                        This Cookie Policy explains how Clenja Tech Ltd ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at clenjatech.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. What are cookies?</h2>
                    <p>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>
                    <p>
                        Cookies set by the website owner (in this case, Clenja Tech Ltd) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Why do we use cookies?</h2>
                    <p>
                        We use first party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. For example, we use essential cookies to authenticate users through our Client Portal.
                    </p>
                    <p>
                        Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for analytics and other purposes.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Types of cookies we use</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</li>
                        <li><strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
                        <li><strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. How can I control cookies?</h2>
                    <p>
                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website (like the Client Portal) may be restricted.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact us</h2>
                    <p>
                        If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:privacy@clenjatech.com" className="text-primary hover:underline">privacy@clenjatech.com</a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
