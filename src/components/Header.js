import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:hello@example.com",
    label: "Email",
  },
  {
    icon: faGithub,
    url: "https://github.com",
    label: "GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    label: "Medium",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    label: "Stack Overflow",
  },
];

const touchTargetStyles = {
  WebkitTapHighlightColor: "transparent",
};

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!headerRef.current) return;

      if (currentScrollY > prevScrollY.current) {
        // scrolling down -> hideYup
        headerRef.current.style.transform = "translateY(-200px)";
      } else {
        // scrolling up -> show
        headerRef.current.style.transform = "translateY(0)";
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transform="translateY(0)"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" width="100%">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 3, md: 6 }}
          px={{ base: 3, sm: 4, md: 10, lg: 16 }}
          py={{ base: 3, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box as="nav" width={{ base: "100%", md: "auto" }} display="flex" justifyContent="center">
            <HStack spacing={{ base: 2, sm: 3, md: 6 }} flexWrap="wrap" justifyContent="center">
              {socials.map((social) => (
                <Box
                  key={social.label}
                  as="a"
                  href={social.url}
                  aria-label={social.label}
                  color="inherit"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "1.9rem", md: "2rem" }}
                  lineHeight="1"
                  p={{ base: 1, md: 0 }}
                  borderRadius="md"
                  transition="color 0.18s ease, transform 0.18s ease"
                  sx={touchTargetStyles}
                  _hover={{ color: "blue.200" }}
                  _active={{ color: "blue.200", transform: "scale(0.96)" }}
                  _focus={{ boxShadow: "none" }}
                  _focusVisible={{
                    outline: "2px solid",
                    outlineColor: "whiteAlpha.700",
                    outlineOffset: "2px",
                  }}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </Box>
              ))}
            </HStack>
          </Box>
          <Box as="nav" width={{ base: "100%", md: "auto" }} display="flex" justifyContent="center">
            <HStack spacing={{ base: 3, md: 8 }} flexWrap="wrap" justifyContent="center">
              <Box
                as="a"
                href="/#projects"
                color="inherit"
                textDecoration="none"
                display="inline-flex"
                alignItems="center"
                fontSize={{ base: "1rem", md: "inherit" }}
                fontWeight={{ base: "600", md: "inherit" }}
                px={{ base: 3, md: 0 }}
                py={{ base: 1.5, md: 0 }}
                borderRadius="full"
                transition="color 0.18s ease, transform 0.18s ease"
                sx={touchTargetStyles}
                _hover={{ color: "blue.200" }}
                _active={{ color: "blue.200", transform: "translateY(1px)" }}
                _focus={{ boxShadow: "none" }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "whiteAlpha.700",
                  outlineOffset: "2px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, "", "/#projects");
                  handleClick("projects")();
                }}
              >
                Projects
              </Box>

              <Box
                as="a"
                href="/#contact-me"
                color="inherit"
                textDecoration="none"
                display="inline-flex"
                alignItems="center"
                fontSize={{ base: "1rem", md: "inherit" }}
                fontWeight={{ base: "600", md: "inherit" }}
                px={{ base: 3, md: 0 }}
                py={{ base: 1.5, md: 0 }}
                borderRadius="full"
                transition="color 0.18s ease, transform 0.18s ease"
                sx={touchTargetStyles}
                _hover={{ color: "blue.200" }}
                _active={{ color: "blue.200", transform: "translateY(1px)" }}
                _focus={{ boxShadow: "none" }}
                _focusVisible={{
                  outline: "2px solid",
                  outlineColor: "whiteAlpha.700",
                  outlineOffset: "2px",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, "", "/#contact-me");
                  handleClick("contactme")();
                }}
              >
                Contact Me
              </Box>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
