import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

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
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          spacing={6}
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              <a href="mailto: hello@example.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>

              <a href="https://github.com">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>

              <a href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>

              <a href="https://medium.com">
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>

              <a href="https://stackoverflow.com">
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>    
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, "", "/#projects");
                  handleClick("projects")();
                }}
              >
                Projects
              </a>

              <a
                href="/#contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState(null, "", "/#contact-me");
                  handleClick("contactme")();
                }}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
