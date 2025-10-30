// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DownloadSchedule = (scheduleData: any) => {
    
    let dataStr = '';
    scheduleData.period.forEach((period) => {
        dataStr += `${period.short}\t`;
    });

    console.log(dataStr);
    return (
        <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
          bg-blue-600 text-white hover:bg-blue-700`}
        >
            <Download className="w-4 h-4" /> Завантажити розклад
        </button>
    );
};
import { Download } from 'lucide-react';
