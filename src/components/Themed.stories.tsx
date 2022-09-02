import { BaseList } from '../base-components'
import ListItem from './list-item/ListItem'
import ThemeText from './theme-text/ThemeText'
import Button from './button/Button'

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
        <ThemeText as="div">[Primary] This text is colored to match the theme.</ThemeText>
        <ThemeText as="div" secondary>
          [Secondary] This text is colored to match the theme, but with less emphasis.
        </ThemeText>
      </div>
    </>
  )
}
