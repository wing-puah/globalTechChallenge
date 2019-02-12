import React from 'react'
import styled from 'styled-components'

const AccordionBlock = styled.div`
  list-style-type: none;
  padding: 0;

  .accordion-list__item {
    padding: 20px;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 10px 30px -10px rgba(15, 72, 179, 0.2);

    &:hover {
      -webkit-box-shadow: 0px 1px 28px -7px rgba(77,77,77,1);
      -moz-box-shadow: 0px 1px 28px -7px rgba(77,77,77,1);
      box-shadow: 0px 1px 28px -7px rgba(77,77,77,1);
    }
  }
`

const AccordionItemIcon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease-in-out;
  opacity: 0.6;
`

const AccordionItemListBlock = styled.div`
  &:hover {
    cursor: pointer;
  }

  .accordion-item__title {
    width: 85%;
  }

  &.accordion-item--opened .accordion-item__inner {
    max-height: 100rem;
    transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transition-duration: 0.5s;
    transition-property: max-height;
  }

  &.accordion-item--opened .accordion-item__content {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    transition-property: opacity, transform;
  }

  .accordion-item__inner {
    max-height: 0;
    overflow: hidden;
    text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    transition-duration: 0.5s;
    transition-property: max-height;
    z-index: 1;
    position: relative;
  }

  .accordion-item__content {
    opacity: 0;
    transform: translateY(-1rem);
    transition-timing-function: linear, ease;
    transition-duration: 0.1s;
    transition-property: opacity, transform;
    transition-delay: 0.5s;
    padding: 0;
  }
`

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      opened: false
    }
  }

  render () {
    const {
      state: {
        opened
      }
    } = this

    return (
      <AccordionItemListBlock
          className={`accordion-item, ${opened && 'accordion-item--opened'}`}
          onClick={() => { this.setState({ opened: !opened }) }}
      >
        <div className='accordion-item__line'>
          <h4 className='accordion-item__title d-inline-block mb-0 pb-0'>
            {this.props.title}
          </h4>
          <AccordionItemIcon className="float-right">
            <i className={this.state.opened === false ?
                'zmdi zmdi-chevron-down' : 'zmdi zmdi-chevron-up'
              }/>
          </AccordionItemIcon>
        </div>
          <div className='accordion-item__inner'>
            <div className='accordion-item__content'>
              <div className='accordion-item__paragraph mb-0 py-4'
                  dangerouslySetInnerHTML={{__html: this.props.paragraph}} />
            </div>
          </div>
      </AccordionItemListBlock>
    )
  }
}

const Accordion = (props) =>  (
  <div className='wrapper'>
    <AccordionBlock className='accordion-list'>
      {props.data.map((el, idx) => (
        <div className='accordion-list__item border' key={idx}>
          <AccordionItem {...el} />
        </div>
      ))}
    </AccordionBlock>
  </div>
)

export default Accordion;
