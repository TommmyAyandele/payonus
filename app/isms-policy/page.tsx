"use client";
import React from "react";
import LegalPage, { LegalSection } from "../LegalPage";

const SECTIONS: LegalSection[] = [
  {
    id: "policy-statement",
    heading: "Policy Statement",
    content: (
      <>
        <p>
          The Board and Management of Payonus, which operates in the Information Technology sector,
          are committed to preserving the confidentiality, integrity and availability of all physical
          and electronic information assets throughout the organization, in order to preserve its
          asset, legal, regulatory as well as contractual, compliance and image. The Information
          Security Management Systems (ISO 27001) requirements will continue to be aligned with
          organizational goals and is also intended to be an enabling mechanism for information
          sharing, electronic operations, and reducing information &amp; technology-related risks to
          acceptable levels.
        </p>
        <p>
          Payonus is committed to providing quality services to our customers, both internal and
          external, by aligning Information Technology investments with organizational goals. Payonus
          has aligned its processes and operations to the requirements of the ISO 27001:2022 standard
          to ensure cyber resilience, protection of its information assets and maximization of
          benefit/returns on IT investments.
        </p>
      </>
    ),
  },
  {
    id: "policy-commitments",
    heading: "Our Commitments",
    content: (
      <>
        <p>It is therefore Payonus's policy to ensure:</p>
        <ul>
          <li>
            Payonus's current strategy and Information Security Management Systems (ISMS) provide
            the context for identifying, assessing, evaluating and controlling
            information/process-related risks through the establishment and maintenance of the ISMS.
            The risk assessment and risk treatment plan capture how identified risks are controlled
            in alignment with Payonus's risk management strategy.
          </li>
          <li>
            Information security education, awareness and training are made available to all
            stakeholders.
          </li>
          <li>
            All employees of Payonus and external parties identified in the Management Systems are
            expected to comply with this policy.
          </li>
          <li>
            The ISMS shall be subject to continuous and systematic review with improvements adopted
            where necessary.
          </li>
          <li>
            Management is committed to the continual improvement of the ISMS in the organization.
          </li>
          <li>
            Breach of the policy or security mechanism may warrant disciplinary measures, up to and
            including termination of contract, as well as legal action in line with the Cybercrime
            Prohibition Act 2015.
          </li>
        </ul>
      </>
    ),
  },
];

export default function ISMSPolicyPage() {
  return (
    <LegalPage
      title="ISMS Policy Statement"
      subtitle="Our commitment to preserving the confidentiality, integrity and availability of all information assets."
      updated="1 May 2026"
      sections={SECTIONS}
    />
  );
}
