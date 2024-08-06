import { QueriesPieChart } from './QueriesPieChart';
import { QueriesBarChart } from './QueriesBarChart';
import { QueriesLineChart } from './QueriesLineChart';

export function TripleGraphs() {
    return (
        <div className="px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        <QueriesPieChart/>
        <QueriesBarChart/>
        <QueriesLineChart/>
      </div>
    </div>
    )
  }