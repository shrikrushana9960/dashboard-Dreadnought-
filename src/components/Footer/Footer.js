/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : "Made with ❤️ by "}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://dreadnought.school/"
          target="_blank"
        >
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "dreadnought "}
        </Link>
        &
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.Shrikrushna.com"
          target="_blank"
        >
          {document.documentElement.dir === "rtl" ? "سيممبل " : " Shrikrushna"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " for a better web"}
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://dreadnought.school/">
            {document.documentElement.dir === "rtl"
              ? "توقيت الإبداعية"
              : "dreadnought"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="https://www.Shrikrushna.com">
            {document.documentElement.dir === "rtl" ? "سيممبل" : "Shrikrushna"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            color="gray.400"
            href="#blog"
            href="https://dreadnought.school/blog"
          >
            {document.documentElement.dir === "rtl" ? "مدونة" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="gray.400"
            href="#license"
            href="https://dreadnought.school/license"
          >
            {document.documentElement.dir === "rtl" ? "رخصة" : "License"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
