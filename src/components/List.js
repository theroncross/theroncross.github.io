import React from 'react';
import Flex from './Flex';

const List = (props) => {
  const { items, tag, itemStyle, style } = props;
  const Tag = tag;
  let contents;

  if (Tag) {
    contents = items.map((item, i) => {
      return <Tag key={i} style={itemStyle} >{item}</Tag>;
    });
  } else {
    contents = items;
  }

  return (
    <Flex style={style} >
      {contents}
    </Flex>
  );
};

const { string, array, object } = React.PropTypes;

List.propTypes = {
  items: array.isRequired,
  tag: string,
  itemStyle: object,
  style: object,
};

export default List;
