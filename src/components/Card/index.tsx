import Link from 'next/link'
import { CardProps } from './types'
import * as S from './_styles'

const Card: React.FC<CardProps> = props => {
  const { href, imgSrc, imgAlt, layoutId } = props

  return (
    <Link href={href}>
      <S.Container>
        <S.AnimatedImg src={imgSrc} alt={imgAlt} layoutId={layoutId} />
      </S.Container>
    </Link>
  )
}

export default Card
