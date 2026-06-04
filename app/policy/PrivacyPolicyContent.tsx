import Link from "next/link";

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-lg font-semibold text-text-primary">{children}</h3>
  );
}

function MinorHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mt-4 text-base font-semibold text-text-primary">{children}</h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-text-secondary">{children}</p>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 leading-relaxed text-text-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PrivacyPolicyContent() {
  return (
    <article className="space-y-4">
      <P>Thank you for using Code Baxh.</P>
      <P>
        The purpose of this privacy notice is to tell you what personal
        information Code Baxh collects from you, how and when it may be collected
        and how we use it in order for you to access and use our recruitment
        services.
      </P>
      <P>
        Personal information refers to any information that can identify you as
        a living individual, such as name, address, email address, National
        Insurance number, telephone number, bank details etc. We will refer to
        this as &ldquo;personal information&rdquo; within this notice.
      </P>
      <P>
        When this notice mentions &ldquo;us&rdquo;, &ldquo;we&rdquo;, or
        &ldquo;our&rdquo;, it refers to Code Baxh, who is responsible for your
        personal information under this agreement (the Data Controller).
      </P>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          1. Information we collect
        </h2>
        <P>
          Recruitment businesses obtain personal data through a variety of
          sources. You may have applied for a role you had seen advertised by
          us, you may have registered with us directly via our website, or you
          may have uploaded your details to a job board or social networking
          site for job-seeking purposes. We collect three main categories of
          information from you, as detailed below.
        </P>

        <Subheading>1.1 Information you give to us</Subheading>

        <MinorHeading>
          1.1.1 Information that is necessary to use our Recruitment Services
        </MinorHeading>
        <P>
          We ask for and collect the following information when you register as a
          candidate with Code Baxh. This information is necessary for the
          adequate performance of a contract between you and us and to allow us
          to comply with our legal obligations. Without it, we will be unable
          to provide you with our recruitment services.
        </P>
        <P>This information includes (without limitation):</P>
        <P>
          <strong className="text-text-primary">General registration details</strong>{" "}
          – when you register with Code Baxh, we require personal information
          such as your name, address, contact details etc., in order to be able
          to provide work-seeking services to you.
        </P>
        <P>
          <strong className="text-text-primary">Work history</strong> – in order
          to assess your suitability as a candidate for the vacancies we are
          working on with our clients, we will need to receive information
          regarding your employment to date. This may include your CV,
          education, relevant qualifications, and courses undertaken, your
          reference details, and other information you feel is useful to tell us
          about yourself in regard to your job search.
        </P>
        <P>
          <strong className="text-text-primary">Pre-employment vetting</strong>{" "}
          – As a recruitment business, we are bound by the terms of the Conduct
          of Employment Agencies and Employment Businesses Regulations 2003,
          which requires us by law to collect and verify information regarding
          individuals&rsquo; identity, suitability for a job vacancy and their
          right to work in the location the respective role is based.
        </P>
        <P>
          <strong className="text-text-primary">Enhanced vetting checks</strong>{" "}
          – For certain positions we are working on, we may need to process
          other enhanced information about you, which could include (but is not
          limited to) information about your physical and mental health and
          your criminal record to date. This is known as &ldquo;sensitive
          personal information&rdquo;, and whilst we will keep all of your
          personal information secure, we will protect this to a higher level.
          These requirements are set and stipulated by the industries or
          organisations we are working with or by the government.
        </P>

        <MinorHeading>1.1.2 Information you choose to give to us</MinorHeading>
        <P>
          On top of the information we require you to give to us to use our
          recruitment services, you may choose to give us additional
          information about you that enables us to tailor the services we
          provide to you. This additional information will be processed based on
          your consent.
        </P>
        <P>
          <strong className="text-text-primary">Additional profile information</strong>{" "}
          – this may include extra information regarding your skillset, your
          career highlights and achievements to date and your future ambitions,
          including the type of employment you are seeking, the locations you
          wish to consider for this and the opportunities you would like to
          hear about from us.
        </P>
        <P>
          <strong className="text-text-primary">Other information</strong> – You
          may provide us with some other information when completing a form,
          responding to our surveys, or where you select and manage your
          marketing preferences.
        </P>

        <MinorHeading>
          1.1.3 Information that is necessary to on-board you for a work
          assignment
        </MinorHeading>
        <P>
          Suppose you are seeking or are offered and accept a temporary work
          assignment through us. In that case, we will require further
          information from you in order for you to enter into this contract and
          to ensure you are paid accordingly. This can include but is not
          exhaustive of your bank account details, your National Insurance
          number or limited company information, your emergency contact details,
          equalities and diversity monitoring data, and potentially some
          personal medical history necessary to fulfil our legal obligations to
          you, our clients.
        </P>

        <Subheading>
          1.2 Information we automatically collect from your use of our website
        </Subheading>
        <P>
          A small file is downloaded to your computer called a
          &ldquo;cookie&rdquo; when you visit our website. Cookies, alongside
          other tools, help us improve our website&rsquo;s performance and
          enhance your experience.
        </P>
        <P>We use cookies to help us:</P>
        <List
          items={[
            "Make our website work as you'd expect",
            "Remember your settings during and between visits",
            "Improve the speed/security of the site",
            "Monitor user traffic patterns",
            "Understand how our visitors use our website",
            "Optimise our onsite communication",
          ]}
        />
        <P>
          This means that you get the best possible user experience and relevant
          information based on your needs.
        </P>
        <MinorHeading>What we don&apos;t do</MinorHeading>
        <P>
          We don&apos;t use cookies to gather any personal information that
          could be used to identify you or to advertise products &amp; services
          to you on other websites.
        </P>

        <Subheading>1.3 Information we collect from third parties</Subheading>
        <P>
          We may also receive information about you from third parties. These
          may include your referees to verify the information you have given us
          regarding your work history and performance, our clients may share
          personal information about you with us, we may find information about
          you on social media, e.g. LinkedIn or other job sites, another agency
          or organisation may pass your details to us, you may be referred to
          us through another agency as a supplier to a contract, or we may
          receive other information from government organisations when performing
          background checks where required.
        </P>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">2. Client Data</h2>
        <P>
          <strong className="text-text-primary">
            Providing recruitment services
          </strong>{" "}
          – If you are a Code Baxh customer, we need to collect and process
          information about you, or individuals at your organisation, in order
          to provide you with our recruitment services. These include (without
          limitation); finding a suitable pool of candidates for your vacancies,
          providing you with a Managed Service Provider (&ldquo;MSP&rdquo;)
          programme directly or through another organisation, providing you with
          Recruitment Process Outsourcing (&ldquo;RPO&rdquo;) services directly
          or through another organisation, to provide you with market-relevant
          information, or to source potential opportunities from you as part of
          our recruitment services.
        </P>
        <P>
          <strong className="text-text-primary">The information we collect</strong>{" "}
          – The information we collect about our clients is very minimal and is
          generally only to ensure our relationship and the services we provide
          run smoothly or to comply with our legal requirements. These include
          (but are not limited to) retaining records of our dealings where
          appropriate to ensure compliance with our contractual obligations,
          address any query regarding legal claims, assess suitability to
          contact you regarding potential opportunities and/or our services and
          ensure compliance with this privacy notice.
        </P>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          3. How we use the data we collect
        </h2>
        <P>
          We use, store, and process information about you, including personal
          information, to provide and improve our recruitment services to you
          and our clients and comply with our legal requirements.
        </P>

        <Subheading>3.1 Providing our recruitment services</Subheading>
        <List
          items={[
            "Submission of details to clients – If you apply for a role we are advertising or request to be put forward for suitable positions that match the preferences you have provided us with, we will share some of your personal information with our clients in relation to these vacancies. These can include your name, work history and any relevant qualifications in relation to these vacancies.",
            "Providing reports to clients, managing pay and work performance – To allow us to measure our performance, we are required to provide reports periodically to our clients. This information can include your personal information to include your name, pay rate, and total hours worked and demonstrate our adherence to our legal requirements.",
          ]}
        />

        <Subheading>3.2 Improving our services</Subheading>
        <List
          items={[
            "Staff training – We regularly monitor and review the performance of our staff to ensure we are providing a quality service to our customers; that this service is compliant with our obligations and is in line with best practices. Therefore, we review your records on our database and any feedback you provide us with to feed into our training.",
            "Marketing – Where you have permitted us to do so, we will send you promotional messages, marketing, advertising, and other information we may think is of interest to you. This can include information regarding our referral programmes, competitions, events, and surveys to help improve our website and to gain feedback on proposed business development.",
          ]}
        />
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          4. Sharing and disclosure
        </h2>
        <P>
          In order to successfully provide our recruitment services, it is
          sometimes necessary to involve some of our partner organisations to
          assist us in doing so. We have carefully selected these partners and
          have taken steps to ensure that your personal information is protected
          and stored securely. The instances where it is necessary to share your
          information with these partners are described here;
        </P>

        <Subheading>4.1 Sharing with service providers</Subheading>
        <List
          items={[
            "Parties that process data on our behalf – In order to help us operate as a business, in providing our recruitment services, we sometimes need to outsource some of our functions to external providers. These third parties have only limited access to your information, may use your information only to perform these tasks on our behalf, and are obligated to us not to disclose or use your information for other purposes. These include (without limitation) IT support, cloud platforms to host and store our data, training providers and platforms, legal and professional advisers, background screening providers, insurers, and auditors.",
            "Managed Service Providers (\"MSPs\") or Recruitment Process Outsourcing services (\"RPOs\") – Some of the organisations we work with outsource their recruitment function to other organisations called MSPs or RPOs. In order for us to submit you to a vacancy at the organisation, we need to work through these third parties who will process your data and application on their behalf. We will always have agreements in place to ensure your data is fully protected and your same rights apply regardless.",
          ]}
        />

        <Subheading>4.2 Sharing with other third parties</Subheading>
        <P>
          From time to time, we may be required by regulators or law enforcement
          agencies to provide information to them to prevent or detect criminal
          offences or fraud, prevent harm, or as part of other investigations
          where there is a legal basis for doing so. Where appropriate, we will
          notify you of such legal requests unless providing notice is
          prohibited by the legal process itself.
        </P>

        <Subheading>4.3 With your consent</Subheading>
        <P>
          Individuals, hirers and other third parties – Where you have expressed
          an interest in relation to the current or prospective vacancies that
          we are working on, we will share your details with those involved in
          the recruitment process in relation to these.
        </P>

        <Subheading>4.4 International transfers</Subheading>
        <P>
          In order to provide you with the best possible service when using our
          recruitment services, it may be necessary for us to transfer your
          data internationally. This may be between or within our Code Baxh
          services offices internationally, overseas clients, cloud-based
          storage providers, or other service providers to assist us in
          operating as a business. Where we do transfer your data internationally,
          we will always ensure that this is compliant with data protection
          regulation and that the way in which we transfer it provides
          sufficient safeguards in relation to your personal information within
          a company&rsquo;s international locations using Binding Corporate
          Rules; ensuring we have a full data transfer agreement in place that
          incorporates the current standard contractual clauses as set out by
          the European Commission when transferring data from a data controller
          within the European Economic Area to data controllers and processors
          outside of the regulation&rsquo;s authority; transferring your data to
          a country that the European Commission has approved in respect of
          their local data protection legislation; where you have consented to
          it, or there is another legal basis for the transfer.
        </P>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          5. How long do we store your information?
        </h2>
        <P>
          Our general approach is to only store your personal information for as
          long as we are required to do so or for as long as the data we hold is
          relevant. We therefore apply the following information retention
          periods;
        </P>
        <List
          items={[
            "We will retain your information for a period of five years from our last point of meaningful contact with you. Meaningful contact for us is where you have actively communicated with us in relation to our recruitment services, either verbally or in writing. As a candidate, this may include any communication where you express interest in the potential roles we are working on or where you have provided us with an updated version of your CV in relation to these roles.",
            "As a recruitment business, we must hold records of our services to comply with our legal obligations. These include (without limitation): for 12 months from the date we last provided our recruitment services to you, under the Conduct of Employment Agencies and Employment Business Regulations, 2003; for 6 years from the end of each tax year for the purpose of retaining payroll records under the Income Tax (Employment and Pensions) Act 2003.",
          ]}
        />
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">
          6. Security and Confidentiality
        </h2>
        <P>
          We continuously implement and update administrative, technical, and
          physical security measures to help protect your information against
          unauthorised access, loss, destruction, or alteration. All of our
          data is stored on secure databases for which we have robust security
          systems in place to limit the likelihood of &ldquo;hacking&rdquo;.
          These include regular vulnerability, disaster recovery and penetration
          tests on our systems internally. We are Cyber Essentials certified,
          which gives us a clear picture of our cyber security grading and any
          areas of risk to our customers and us. If you know or have reason to
          believe that your personal information has been lost, stolen,
          misappropriated, or otherwise compromised, don&apos;t hesitate to get
          in touch with us, following the instructions in the Contact Us section
          below.
        </P>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-text-primary">7. Your rights</h2>
        <P>
          We take the protection of your personal information very seriously,
          and it is important you understand the rights you retain in respect of
          your data, even after you have shared it with us;
        </P>
        <List
          items={[
            "Rights in relation to automated decision making – We will not make any decisions based purely on automated processes to assess your suitability for the vacancies we are working on.",
            "Rights to make a Subject Access Request (SAR) – You have the right to request to see all the information we are holding on you at any time; there will be no charge for this service unless you have made more than one request for the same information.",
            "Right to data portability – Where this is possible, you have the right to request for us to transfer the information we are holding on you to another organisation. This can only be done with explicit direction from you, and we will never pass your information to other organisations without us having received this.",
            "Rights to restrict processing – You have the right to restrict the processing of your data in certain circumstances.",
            "Right to withdraw consent – Where we have obtained your consent for us to process your information (for example, for marketing purposes), you similarly will have the right to withdraw this consent at any time. We will cease to carry out the process for which we were holding this for unless there is another reason which compels us to do so.",
            "Right to be forgotten – Similar to consent/withdrawing your consent, you have the right to request your data is removed from our systems. We may be required by law to hold some information on you if we have actively sought work for you or if you have worked through us as a temporary worker. This information will be held in our secure systems, and we will only hold it for as long as we are legally required to do so.",
            "Right to rectification – where the data we hold about you is factually incorrect or incomplete, you have the right to request correction or completion, and we will do this without undue delay.",
            "Right to lodge a complaint – Where you are unhappy about how we are handling your personal information; you have the right to lodge a complaint with the Information Commissioner's Office.",
          ]}
        />
        <P>
          For questions about this policy or your personal data, contact us at{" "}
          <a
            href="mailto:code.baxh@gmail.com"
            className="font-medium text-text-primary underline-offset-4 hover:underline"
          >
            code.baxh@gmail.com
          </a>
          . To lodge a complaint with the ICO, visit{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text-primary underline-offset-4 hover:underline"
          >
            ico.org.uk
          </a>
          .
        </P>
      </section>

      <Link
        href="/"
        className="mt-10 inline-flex text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
      >
        ← Back to home
      </Link>
    </article>
  );
}
