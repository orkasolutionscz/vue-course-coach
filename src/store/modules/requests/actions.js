export default {
    async contactCoach(context, payload) {
        const newRequest = {
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };
        
        const response = await fetch(`https://vue-http-demo-655e7-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: "POST",
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Fetch error. Fail to send request');
            throw error;
        }

        newRequest.id = responseData.name;
        
        context.commit('addRequest', newRequest)
    },

    async fetchRequest(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vue-http-demo-655e7-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Fetch error. Fail to send requests');
            throw error;
        }
      
    }
};