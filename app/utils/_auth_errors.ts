export const authErrors: Record<string, string> = {
    account_not_linked:
        "This account is already registered with a different sign-in method. Try signing in with the same method you used originally.",
    account_already_linked_to_different_user: "This account is already linked to another user.",
    invalid_callback_request: "The authentication request is invalid.",
    unable_to_get_user_info: "We couldn't retrieve your information from the provider.",
    unable_to_create_user: "We couldn't create your account. Please try again.",
};
