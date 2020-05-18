import format from './format';
import moment from 'moment';

function usStats(data) {
     const [usStatsRaw] = data; 
     const tested = usStatsRaw.positive+usStatsRaw.negative+usStatsRaw.pending;
     return {
         cases: format.number(usStatsRaw.positive),
         death: format.number(usStatsRaw.death),
         recovered: format.number(usStatsRaw.recovered),
         ventilator: format.number(usStatsRaw.onVentilatorCurrently),
         hospitalized: format.number(usStatsRaw.hospitalized),
         icu: format.number(usStatsRaw.inIcuCurrently),
         tested: format.number(tested),
         updated: moment(usStatsRaw.lastModified).format('LLLL'),
     }
}

export default  {
    usStats,
}