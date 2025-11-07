"use client";

import styled from "styled-components";

export function InsightsSection() {
  return (
    <Wrap id="insights">
      <Heading>One dashboard to manage everything</Heading>
      <Text>
        Track payments, monitor cash flow, and view your funding balance in real
        time.
      </Text>
      <CTA href="#get-started">View dashboard demo</CTA>
    </Wrap>
  );
}

const Wrap = styled.section`
  padding: 6rem 10%;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin: 0 0 1rem;
`;

const Text = styled.p`
  max-width: 720px;
  margin: 0 auto 1.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CTA = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  padding: 0.9rem 1.6rem;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    color: #fff;
  }
`;
