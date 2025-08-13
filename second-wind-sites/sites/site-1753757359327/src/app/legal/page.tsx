import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal',
};

export default function LegalPage() {
  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 prose lg:prose-lg max-w-4xl prose-headings:text-brand-primary prose-headings:font-bold prose-a:text-brand-accent hover:prose-a:text-brand-primary">
          <h1 className="text-4xl font-extrabold sm:text-5xl text-center mb-12 !text-brand-primary">Legal Information</h1>

          <section>
            <h2>Business Continuity Plan</h2>
            <p>Coady Diemar Partners, LLC has adopted a business continuity plan (\"BCP\") to evaluate and manage and lessen the impact of a potential significant disruption to our business operations. Our BCP addresses, among other matters, the safeguarding of employees and client property, the storage and preservation of data, alternate communications with clients and regulators, and alternate communications with employees. Since the timing and impact of disruptions is unpredictable, we will be flexible in responding to actual events as they occur. The BCP is reviewed and updated at least annually.</p>
            <p>Significant business disruptions can vary in scope. We plan to continue in business, and notify you on how to contact us through our web site http://www.coadydiemar.com. Because events that bring about disruptions are unpredictable, Coady Diemar Partners, LLC may not be able to restore full service in the event of failures in certain infrastructure such as utilities, communication networks, transportation, and third party providers. Coady Diemar Partners, LLC does not guarantee that it will be able to continue or resume business operations within any specified period of time under all circumstances.</p>
             <p>For more information or if you have questions about our business continuity planning, you may contact us at (212) 901-2600 or info@coadydiemar.com.</p>
          </section>

          <section>
              <h2>Disclaimer</h2>
              <p>Our website www.coadydiemar.com, is provided for your informational purposes only. Coady Diemar Partners, LLC does not warrant the information or services provided herein or your use of this web site generally, either expressly or implied, for any particular purpose and expressly disclaims any implied warranties, including but not to, warranties of title, non-infringement, merchantability or fitness for a particular purpose.</p>
          </section>

          <section>
              <h2>Terms of Use</h2>
              <p>While the information provided to you on this web site is obtained or compiled from sources we believe to be reliable, Coady Diemar Partners, LLC cannot and does not guarantee the accuracy, validity, timeliness or completeness of any information or data made available to you for any particular purpose.</p>
              <p>Neither Coady Diemar Partners, LLC, nor any of its affiliates, directors, officers or employees, nor any third party vendor, will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of this web site, or resulting from the act or omission of any other party involved in making this web site, the data contained herein or the products or services offered on this web site available to you. In no event will Coady Diemar Partners, LLC or any such parties be liable to you, whether in contract or tort, for any direct, special, indirect, consequential or incidental damages or any other damages of any kind even if Coady Diemar Partners, LLC or any other such party has been advised of the possibility thereof. This limitation on liability includes, but is not limited to, the transmission of any viruses which may infect a user's equipment, failure of mechanical or electronic equipment or communication lines, telephone or other interconnect problems (e.g., you cannot access your internet service provider), unauthorized access, theft, operator errors, strikes or other labor problems or any force majeure. Coady Diemar Partners, LLC cannot and does not guarantee continuous, uninterrupted or secure access to the web site.</p>
              <p>None of the information contained in this web site constitutes a recommendation, solicitation or offer by Coady Diemar Partners, LLC to buy or sell any securities, or provide any investment advice or service.</p>
          </section>

          <section>
              <h2>Proprietary Rights</h2>
              <p>All right, title and interest in this web site and any content contained herein is the exclusive property of Coady Diemar Partners, LLC, except as otherwise stated. Unless otherwise specified, this web site is for your personal and non-commercial use only and you may print, copy and download any information or portion of this web site for your personal use only. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, frame, create derivative works from, transfer, or otherwise use in any other way for commercial or public purposes in whole or in part any information, software, products or services obtained from this web site, except for the purposes expressly provided herein, without the prior written approval of Coady Diemar Partners, LLC. If you copy or download any information or software from this web site, you agree that you will not remove or obscure any copyright or other notices or legends contained in any such information.</p>
          </section>

           <section>
              <h2>Use of Links</h2>
              <p>This web site contains links to third party web sites. These links are provided only as a convenience. The inclusion of any link is not and does not imply an affiliation, sponsorship, endorsement, approval, investigation, verification or monitoring by Coady Diemar Partners, LLC of any information contained in any third party web site. In no event shall Coady Diemar Partners, LLC be responsible for the information contained on that site or your use of or inability to use such site. You should also be aware that the terms and conditions of such site and the site's privacy policy may be different from those applicable to your use of this web site.</p>
          </section>

      </div>
    </div>
  );
}