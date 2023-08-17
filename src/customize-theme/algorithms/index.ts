import { ColorMapToken } from 'antd/es/theme/interface/maps/colors'

import { generateAssociatedColors } from './colorRelationship'
import { ColorPalettes, generateColorPalette, NeutralPaletteOptions, SeedColors, TokenType } from './paletteGenerator'

type Magenta =
  | 'colorMagentaBg'
  | 'colorMagentaBgHover'
  | 'colorMagentaBorder'
  | 'colorMagentaBorderHover'
  | 'colorMagentaHover'
  | 'colorMagenta'
  | 'colorMagentaActive'
  | 'colorMagentaTextHover'
  | 'colorMagentaText'
  | 'colorMagentaTextActive'

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface FullToken extends Record<Magenta, string> {}
}

export type TokenRelationship = (type: TokenType) => Partial<Record<keyof ColorMapToken, number>>

const defaultRelationship: TokenRelationship = (type) => {
  const key = type.toUpperCase()[0] + type.slice(1)

  return {
    [`color${key}Bg`]: 1,
    [`color${key}BgHover`]: 2,
    [`color${key}Border`]: 3,
    [`color${key}BorderHover`]: 4,
    [`color${key}Hover`]: 5,
    [`color${key}`]: 6,
    [`color${key}Active`]: 7,
    [`color${key}TextHover`]: 8,
    [`color${key}Text`]: 9,
    [`color${key}TextActive`]: 10,
  }
}

interface MapTokenAlgorithm extends NeutralPaletteOptions {
  relationship?: TokenRelationship
  seedColors?: Partial<SeedColors>
  infoColorFollowPrimary?: boolean
  adjustWarning?: boolean
  brandColor?: string
}

export const genMapTokenAlgorithm = (params?: MapTokenAlgorithm) => {
  const {
    relationship = defaultRelationship,
    infoColorFollowPrimary = false,
    adjustWarning,
    brandColor = '#646cff',
  } = params || {}

  const funcColors = generateAssociatedColors(brandColor, adjustWarning)

  const seedColors = {
    primary: brandColor,

    ...funcColors,
    ...params?.seedColors,

    magenta: '#d952b1',
    info: '#3491fa',
  }

  if (infoColorFollowPrimary) {
    seedColors.info = brandColor
  }

  const palettes: ColorPalettes = {
    primary: generateColorPalette(seedColors.primary, params).map((color) => color.hex),
    error: generateColorPalette(seedColors.error, params).map((c) => c.hex),
    warning: generateColorPalette(seedColors.warning, params).map((c) => c.hex),
    success: generateColorPalette(seedColors.success, params).map((c) => c.hex),
    info: generateColorPalette(seedColors.info, params).map((color) => color.hex),
    // neutral: generateNeutralPalette(seedColors.primary, { ...params, neutral: true }).map((c) => c.hex),
    // grey: generateNeutralPalette(seedColors.grey, params).map((c) => c.hex),
    magenta: generateColorPalette(seedColors.magenta, params).map((c) => c.hex),
  }

  const tokens = {} as Partial<Record<keyof ColorMapToken, string>>

  const types = ['primary', 'error', 'warning', 'success', 'info', 'magenta'] as TokenType[]

  types.forEach((type) => {
    Object.entries(relationship(type)).forEach(([key, value]) => {
      tokens[key as keyof ColorMapToken] = palettes[type][value]
    })
  })

  return { palettes, tokens }
}

export type { ColorPalettes } from './paletteGenerator'
