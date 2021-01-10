import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const StatlistItem = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={s.statsItem}
      style={{
        backgroundColor: `rgb(${randomColor()},${randomColor()}, ${randomColor()})`,
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={s.statsList}>{items.map(StatlistItem)}</ul>;
};

const Statistics = ({ items }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <StatsList items={items}></StatsList>
    </section>
  );
};

function randomColor() {
  return Math.random() * 255;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
