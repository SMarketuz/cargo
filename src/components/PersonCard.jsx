import React from "react";
import { Button } from '@chakra-ui/button'
import { Box, Image, Link, Text } from '@chakra-ui/react'

export default function PersonCard({bg, hoverBg, text, icon  }) {
  return (
    <Link _hover="none">
      <Box
        bg= {`${bg}`}
        _hover={{ bg: `${hoverBg}`}}
        borderRadius="4px"
        transition="all ease .3s"
        color="white"
        fontSize="17px"
       className="PersonalCard"
        textAlign="center"
        padding='8px'
      >
        <span>{icon} </span>
        Вступить в группу WhatsApp для отслеживания посылок {`${text}`}
      </Box>
    </Link>
  );
}
