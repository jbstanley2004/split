"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styled from "styled-components";

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) =>
    setOpen((current) => (current === key ? null : key));

  return (
    <Wrap>
      <Top>
        <Brand>Split</Brand>

        <Cols>
          <Col>
            <h4>Products</h4>
            <a href="#funding">Funding</a>
            <a href="#payments">Payments</a>
            <a href="#pos">POS</a>
            <a href="#insights">Dashboard</a>
          </Col>
          <Col>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </Col>
          <Col>
            <h4>Resources</h4>
            <a href="#faq">FAQ</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </Col>
        </Cols>

        <Accordion>
          <Item>
            <Head type="button" onClick={() => toggle("products")}>
              <span>Products</span>
              {open === "products" ? <FiChevronUp /> : <FiChevronDown />}
            </Head>
            {open === "products" && (
              <Body>
                <a href="#funding">Funding</a>
                <a href="#payments">Payments</a>
                <a href="#pos">POS</a>
                <a href="#insights">Dashboard</a>
              </Body>
            )}
          </Item>
          <Item>
            <Head type="button" onClick={() => toggle("company")}>
              <span>Company</span>
              {open === "company" ? <FiChevronUp /> : <FiChevronDown />}
            </Head>
            {open === "company" && (
              <Body>
                <a href="#about">About</a>
                <a href="#partners">Partners</a>
                <a href="#contact">Contact</a>
              </Body>
            )}
          </Item>
          <Item>
            <Head type="button" onClick={() => toggle("resources")}>
              <span>Resources</span>
              {open === "resources" ? <FiChevronUp /> : <FiChevronDown />}
            </Head>
            {open === "resources" && (
              <Body>
                <a href="#faq">FAQ</a>
                <a href="#privacy">Privacy</a>
                <a href="#terms">Terms</a>
              </Body>
            )}
          </Item>
        </Accordion>
      </Top>

      <Divider />

      <Bottom>
        <small>
          © {new Date().getFullYear()} Split Payments, Inc. All rights reserved.
        </small>
        <Socials>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="#support">Support</a>
        </Socials>
      </Bottom>
    </Wrap>
  );
}

const Wrap = styled.footer`
  padding: 4rem 10% 2.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Top = styled.div`
  display: grid;
  gap: 2rem;
`;

const Brand = styled.h2`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.9rem;
  margin: 0;
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 3rem;

  @media (max-width: 820px) {
    display: none;
  }

  h4 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0 0 0.8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    display: block;
    margin: 0.35rem 0;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Col = styled.div``;

const Accordion = styled.div`
  display: none;

  @media (max-width: 820px) {
    display: block;
  }
`;

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Head = styled.button`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 0;
  padding: 1rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Body = styled.div`
  display: grid;
  padding: 0 0 1rem;
  gap: 0.4rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Divider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 1.5rem 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  small {
    color: #777;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
