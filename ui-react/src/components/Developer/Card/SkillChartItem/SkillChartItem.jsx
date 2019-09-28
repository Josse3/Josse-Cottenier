import React from 'react';
import './SkillChartItem.css';

const SkillChartItem = props => {
    return (
        <div className="skill-chart-item">
            <h4>{props.title}</h4>
            <div className="experience-bar">
                <span>{props.years} year{props.years === 1 ? '' : 's'}</span>
                <div className="experience-bar-fill" style={{ width: `${props.years / 4 * 100}%` }}>
                </div>
            </div>
        </div>
    );
}

export default SkillChartItem;