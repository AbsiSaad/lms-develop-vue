import { defineStore } from 'pinia'
import { createResource } from 'frappe-ui'

export const usersStore = defineStore('lms-users', () => {
	let userResource = createResource({
		url: 'lms.lms.api.get_user_info',
		onError(error) {
			if (error && error.exc_type === 'AuthenticationError') {
				window.location.href = '/login'
			} else if (error) {
				console.error("Failed to fetch user info:", error);
			} else {
				console.error("Failed to fetch user info: Unknown error (possibly network issue).");
			}
		},
		auto: true,
	})
})
