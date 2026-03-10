import { motion } from 'motion/react';

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "SQL", "C++", "R"] },
  { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"] },
  { category: "Data Engineering", items: ["Apache Spark", "Kafka", "Airflow", "dbt", "Snowflake"] },
  { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Tools", items: ["Git", "Jupyter", "Tableau", "PowerBI", "MLflow"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
