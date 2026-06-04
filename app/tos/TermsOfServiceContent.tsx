import Link from "next/link";

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-semibold text-text-primary first:mt-0">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-text-secondary">{children}</p>;
}

export function TermsOfServiceContent() {
  return (
    <article className="space-y-4">
      <Subheading>Conditions of Use</Subheading>
      <P>
        The use of, access to, or the submitting of information to Code Baxh
        Ltd website (the &ldquo;Web site&rdquo;) shall be deemed acceptance of
        these terms and conditions (&ldquo;Terms&rdquo;). These Terms may be
        altered from time to time, and the continued use of, access to, or
        submitting information to the website will be deemed acceptance of the
        altered Terms.
      </P>

      <Subheading>Who we are and how to contact us?</Subheading>
      <P>
        The Site is operated by Code Baxh (&ldquo;We&rdquo;, &ldquo;Our&rdquo;
        or &ldquo;Us&rdquo;). We are based in England and Wales.
      </P>
      <P>
        To contact us, please fill out our{" "}
        <Link
          href="/#contact"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          contact us form
        </Link>
        .
      </P>

      <Subheading>Contents of the Web site</Subheading>
      <P>
        All information contained on the website is for general information
        purposes only and may be altered at any time by Code Baxh.
      </P>

      <Subheading>Copyright</Subheading>
      <P>
        All copyright and other intellectual property rights in the
        website&apos;s contents (including the Web site&apos;s design) belong
        to Code Baxh, and accordingly, all rights are reserved. Visitors to
        the Web site are permitted to copy, print, or download information from
        the website for personal use only and not for any business purpose.
      </P>

      <Subheading>Trademarks</Subheading>
      <P>
        Code Baxh and its devices are trademarks of Code Baxh. Accordingly,
        visitors do not have any right to use Code Baxh trademarks without the
        express permission of Code Baxh. The website may contain third party
        trademarks from time to time. Visitors do not have any right to use
        such third-party trademarks without the express permission of that
        third party.
      </P>

      <Subheading>Disclaimer</Subheading>
      <P>
        Code Baxh does not warrant the accuracy, reliability, completeness, or
        timeliness of any information contained on the website or any
        information submitted to the website by third parties (including any
        curriculum vitae submitted to the website).
      </P>
      <P>
        Any advice given on the website is for educational purposes only.
        Professional advice should be sought before applying any advice to
        circumstances.
      </P>
      <P>
        Code Baxh hereby excludes all warranties, whether express or implied,
        including warranties in respect of quality or fitness for any particular
        purpose of any information contained on the website to the fullest
        extent permitted by law.
      </P>
      <P>
        Code Baxh does not warrant that the Web site is free of computer
        viruses or any other harmful devices (&ldquo;Harmful Devices&rdquo;),
        and accordingly, Code Baxh shall not be liable for any loss or damage
        whatsoever howsoever arising from any Harmful Devices.
      </P>
      <P>
        In no event shall Code Baxh be liable for any direct, indirect,
        special, or consequential damages or loss (including, but not limited
        to, loss of profits, business, revenue, goodwill, anticipated savings,
        and/or any claims made under third party contracts) howsoever arising
        (whether in contract, tort or otherwise) out of any access to the
        website or use of any information contained on the Web site.
      </P>

      <Subheading>Links</Subheading>
      <P>
        The website may contain links to third-party websites from time to
        time; such links are provided for information purposes only. Code Baxh
        are not responsible for the content or accuracy of the information on
        such websites. Code Baxh hereby excludes all liability for any claims,
        loss, demands or damages of any kind whatsoever howsoever arising as a
        result of accessing third-party websites from the links contained on
        the website.
      </P>

      <Subheading>Submission of Information to the Website</Subheading>
      <P>
        Code Baxh shall use any information submitted to the website by
        visitors in accordance with the Data Protection Act.
      </P>
      <P>
        Any visitor who submits information to the website warrants that the
        information provided is complete, true, and accurate in all respects.
      </P>
      <P>
        We will use your information and the subsequent information we collect
        about you to create a database. This database and the information it
        contains will be used by Code Baxh (and their clients) for the purpose
        of assessing your suitability, qualifications, and skills not only for
        current work assignments but also for work assignments which we think
        may be of interest to you in the future.
      </P>
      <P>
        We may also use your information to keep you informed by email,
        telephone, and/or mail about future work opportunities, industry
        updates, and additional products and services that we consider may be
        of interest to you and conduct research and compile reports.
      </P>
      <P>
        By responding to our subsequent enquires, you are deemed to consent to
        our processing personal data about you where necessary for the above
        purposes, including the processing of any sensitive personal data about
        you.
      </P>
      <P>
        If you do not want to receive any information from either third parties
        or us, please tell us when you next contact us. If you wish to receive
        a copy of the information, we hold about you, write to us at{" "}
        <a
          href="mailto:code.baxh@gmail.com"
          className="font-medium text-text-primary underline-offset-4 hover:underline"
        >
          code.baxh@gmail.com
        </a>
        .
      </P>

      <Subheading>Jurisdiction</Subheading>
      <P>
        The Terms shall be governed by and construed in accordance with the laws
        of England and Wales and shall be subject to the exclusive jurisdiction
        of the Courts of England and Wales. To the extent possible, the
        application of any law of each European Community member state is
        excluded from having an operation in respect of these Terms. For
        convenience, these Terms may be translated into languages other than
        English. Should any dispute arise as to the meaning of particular
        terms, then the English version of the Terms shall predominate over any
        translation.
      </P>
    </article>
  );
}
