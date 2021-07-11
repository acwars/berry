import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '../components/row';
import Col from '../components/col';
import Container from '../components/container';
import './styles/grid.styl';

import '../components/row/index.styl';
import '../components/col/index.styl';
import '../components/container/index.styl';
storiesOf('布局', module)
  .add(
    'Grid 栅栏',
    () => (
      <div>
        <h2>24格网格</h2>
        {[8, 6, 4, 2].map((span, i) => {
          return (
            <Row className="example-row" key={i}>
              {new Array(24 / span).fill().map((_, j) => (
                <Col className="example-col" span={span} key={j}>
                  <span>{span}</span>
                </Col>
              ))}
            </Row>
          );
        })}

        <h2>设置 gutter</h2>

        <Row className="example-row" gutter={16}>
          <Col span={8} className="example-col">
            <span>8</span>
					</Col>
          <Col span={8} className="example-col">
            <span>8</span>
					</Col>
          <Col span={8} className="example-col">
            <span>8</span>
					</Col>
        </Row>

        <h2>设置间隙</h2>
        <Row className="example-row">
          <Col span={8} className="example-col">
            <span>8</span>
					</Col>
          <Col span={8} offset={8} className="example-col">
            <span>8</span>
					</Col>
        </Row>
        <Row className="example-row">
          <Col span={10} className="example-col">
            <span>10</span>
					</Col>
          <Col span={2} offset={2} className="example-col">
            <span>2</span>
					</Col>
          <Col span={2} offset={2} className="example-col">
            <span>2</span>
					</Col>
          <Col span={5} offset={1} className="example-col">
            <span>5</span>
					</Col>
        </Row>
      </div>
    )
  )
  .add(
    'Container 包裹容器',
    () => (
      <div>
        <h2>基本使用</h2>

        <Container>默认1200px 居中</Container>

        <h2>自定义宽度</h2>

        <Container width={200}>200px 居中</Container>


        <h2>垂直水平居中</h2>

        <Container width={500} center>内容垂直水平居中</Container>
      </div>
    )
  );
