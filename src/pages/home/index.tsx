import { NextPage } from 'next'
import Link from 'next/link'

import * as C from '~/components'
import { cards } from '~/data'
import * as S from '~/styles/pages/home'

const Home: NextPage = () => {
  return (
    <S.Container>
      <C.MetaTags title="Home" />
      <S.Title>Home</S.Title>
      <Link href="/dashboard">
        <S.BackButton>Expense Dashboard</S.BackButton>
      </Link>
      <S.CardsGrid>
        {cards.map(({ id, href, imgSrc, imgAlt, layoutId }) => (
          <C.Card
            key={id}
            href={href}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            layoutId={layoutId}
          />
        ))}
      </S.CardsGrid>
    </S.Container>
  )
}

export default Home
