/** @jsx jsx */
import { jsx, Flex, Box, Text } from 'theme-ui'
import { ParallaxHeader, ParallaxMainOne, ParallaxMainTwo } from "@itenisz/gatsby-theme-vidyaa/src/components/parallax-main"
import { ParallaxImage } from '@itenisz/gatsby-theme-vidyaa/src/components/parallax-image'
import useTranslations from '@itenisz/gatsby-theme-vidyaa/src/hooks/use-translations'
import useGatsbyImages from '@itenisz/gatsby-theme-vidyaa/src/hooks/use-gatsby-images'
import useCfgImages from '@itenisz/gatsby-theme-vidyaa/src/hooks/use-cfg-images'
import { Itranslations } from '@itenisz/gatsby-theme-vidyaa/src/types/type-translations'
import { IcfgImages } from '@itenisz/gatsby-theme-vidyaa/src/types/type-cfg-images'

type Types = {
  height?: string
}

const ParallaxFooterShadow = ({ height = `75vh` }: Types) => {
  const { imgFooterBG } = useGatsbyImages()
  const { imgFooter } = useCfgImages() as IcfgImages
  const { address, addressLineTwo, tel } = useTranslations() as Itranslations

  return (
    <Box>
      <ParallaxImage data={imgFooterBG} imagelink={imgFooter} height={height}>
        <Flex sx={{ variant: `parallax.parallaxInnerTop` }}>
          <Flex
            sx={{
              flexDirection: `column`,
              width: [`100%`],
              opacity: 0.7,
              bg: `gray.3`,
              variant: `texts.elevated`,
            }}
          >
            <Text sx={{ fontSize: [2, 3, 3] }}>{address}</Text>
            <Text sx={{ fontSize: [2, 3, 3] }}>{addressLineTwo}</Text>
            <Text sx={{ fontSize: [2, 3, 3] }}>{tel}</Text>
          </Flex>
        </Flex>
      </ParallaxImage>
    </Box>
  )
}

export { ParallaxHeader, ParallaxMainOne, ParallaxMainTwo, ParallaxFooterShadow as ParallaxFooter }