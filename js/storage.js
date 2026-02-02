// js/storage.js
const TrackerStore = {
    // Initialize defaults if they don't exist
    init() {
        if (!localStorage.getItem('jamb_stats')) {
            const initialData = {
                totalMinutes: 0,
                streak: 0,
                lastStudyDate: null,
                subjects: {
                    math: { time: 0, progress: 0, pdfCount: 0 },
                    english: { time: 0, progress: 0, pdfCount: 0 },
                    // Add other subjects here
                },
                settings: { darkTheme: false, dailyGoal: 120 }
            };
            localStorage.setItem('jamb_stats', JSON.stringify(initialData));
        }
    },

    getData() {
        return JSON.parse(localStorage.getItem('jamb_stats'));
    },

    saveData(data) {
        localStorage.setItem('jamb_stats', JSON.stringify(data));
    },

    updateTime(subject, ms) {
        const data = this.getData();
        const minutes = Math.floor(ms / 60000);
        data.totalMinutes += minutes;
        if(data.subjects[subject]) {
            data.subjects[subject].time += minutes;
        }
        this.saveData(data);
    }
};

TrackerStore.init();