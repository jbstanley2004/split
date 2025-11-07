"use client";

import { type MouseEvent, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import styled from "styled-components";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);
  const handleLinkClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLElement).closest("a");
    if (anchor) {
      close();
    }
  };

  return (
    <Nav aria-label="Primary">
      <Logo href="#hero" onClick={close}>
        Split
      </Logo>

      <Links $open={open} onClick={handleLinkClick}>
        <a href="#funding">Funding</a>
        <a href="#payments">Payments</a>
        <a href="#pos">POS</a>
        <CTA href="#get-started">Get Started</CTA>
      </Links>

      <MenuButton onClick={toggle} aria-label="Toggle menu">
        {open ? <FiX /> : <FiMenu />}
      </MenuButton>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  inset: 0 0 auto 0;
  height: 68px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.a`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.accent};
`;

const Links = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 820px) {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;
    background: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-120%)")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "all" : "none")};
    transition: all 0.25s ease;
  }
`;

const MenuButton = styled.button`
  display: none;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.8rem;

  @media (max-width: 820px) {
    display: block;
  }
`;

const CTA = styled.a`
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-weight: 700;

  @media (max-width: 820px) {
    width: 90%;
    text-align: center;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    color: #fff;
  }
`;
