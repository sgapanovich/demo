import fs from 'fs';
import yaml from 'js-yaml';

export function logUICoverage(yamlPath: string) {
  const file = fs.readFileSync(yamlPath, 'utf8');
  const data = yaml.load(file) as Record<string, Array<Record<string, boolean>>>;

  let totalFeatures = 0;
  let totalCovered = 0;

  console.log("Calculating UI coverage...")

  Object.entries(data).forEach(([page, features]) => {
    let pageFeatures = 0;
    let pageCovered = 0;
    features.forEach(featureObj => {
      Object.values(featureObj).forEach(covered => {
        pageFeatures++;
        if (covered) pageCovered++;
      });
    });
    const pageCoverage = pageFeatures ? Math.round((pageCovered / pageFeatures) * 100) : 0;
    console.log(`${page}: ${pageCoverage}%`);
    totalFeatures += pageFeatures;
    totalCovered += pageCovered;
  });

  const totalCoverage = totalFeatures ? Math.round((totalCovered / totalFeatures) * 100) : 0;
  console.log(`total coverage: ${totalCoverage}%`);
}
