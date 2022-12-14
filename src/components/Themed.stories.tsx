import { BaseList } from '../base-components'
import { ListItem, ThemeText, Button, ColoredContainer, PaddingBox, Card } from '@/components'

export default {
  title: 'Components/Themed Components',
}

export const ThemedComponents = (): JSX.Element => {
  return (
    <>
      <h2>Buttons</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button emphasis="low">Low</Button>
        <Button emphasis="medium">Medium</Button>
        <Button emphasis="high">High</Button>
      </div>

      <br />
      <h2>List Items</h2>
      <BaseList>
        <ListItem onClick={() => console.log('List Item Clicked')}>List Item</ListItem>
        <ListItem onClick={() => console.log('List Item Clicked')}>List Item</ListItem>
        <ListItem onClick={() => console.log('List Item Clicked')}>List Item</ListItem>
        <ListItem onClick={() => console.log('List Item Clicked')}>List Item</ListItem>
      </BaseList>

      <br />
      <h2>ThemeText</h2>
      <div style={{ display: 'grid', gap: 20 }}>
        <ThemeText>[Primary] This text is colored to match the theme.</ThemeText>
        <ThemeText secondary>
          [Secondary] This text is colored to match the theme, but with less emphasis.
        </ThemeText>
      </div>

      <br />
      <h2>ColoredContainer</h2>
      <PaddingBox as={ColoredContainer} top="md" right="md" bottom="md" left="md">
        This container's background is themed.
      </PaddingBox>

      <br />
      <h2>Card</h2>
      <Card outlined>This card's outline is themed.</Card>
    </>
  )
}
