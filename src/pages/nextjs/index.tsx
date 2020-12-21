import { NextPage } from 'next'
import Link from 'next/link'

import * as C from '~/components'
import { cards } from '~/data'
import * as S from './_styles'

const NextJS: NextPage = () => {
  const { imgSrc, imgAlt, layoutId } = cards[0]
  return (
    <S.Container>
      <C.MetaTags title="NextJS" />
      <S.AnimatedImg src={imgSrc} alt={imgAlt} layoutId={layoutId} />
      <Link href="/">
        <S.BackButton>Voltar para a Home</S.BackButton>
      </Link>
    </S.Container>
  )
}

export default NextJS
