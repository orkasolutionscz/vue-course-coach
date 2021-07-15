export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://vue-http-demo-655e7-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: "POST",
            body: JSON.stringify(coachData)
        });

        if (!response.ok) {
            // Osetreni nejakeho erroru
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context) {
        const response = await fetch(`https://vue-http-demo-655e7-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
        const responseData = await response.json();

        if (!response.ok) {
            // Osetreni nejakeho erroru
            alert('nejaky problem s nactenim dat')
        }

        const coaches = [];
        for (const key in responseData) {
            for (const id in responseData[key]) {
                const coach = {
                    id: id,
                    firstName: responseData[key][id].firstName,
                    lastName: responseData[key][id].lastName,
                    description: responseData[key][id].description,
                    hourlyRate: responseData[key][id].hourlyRate,
                    areas: responseData[key][id].areas
                };
                coaches.push(coach);
            }
        }
        context.commit('setCoaches', coaches);
    }
};