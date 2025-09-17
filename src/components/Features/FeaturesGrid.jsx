import React from 'react'
import React from 'react';
import { useI18n } from '../../hooks/useI18n';
import FeatureCard from './FeatureCard';
import featuresData from '../../data/features.json';
import './features.css';

const FeaturesGrid = () => {
  const { t } = useI18n();

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title heading-section">
          {t('features.title')}
        </h2>
        
        <div className="features-grid">
          {featuresData.features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

