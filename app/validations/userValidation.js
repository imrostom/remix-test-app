const userValidation = {
    validateName: (name) => {
        if (!name || name.trim() === "") {
            return "Name must be filled out";
        }
        return null; // Indicates no error
    },
    validateEmail: (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!email || !emailRegex.test(email)) {
            return "Invalid email format";
        }
        return null; // Indicates no error
    },
    validateAddress: (address) => {
        if (!address || address.trim() === "") {
            return "Address must be filled out";
        }
        return null; // Indicates no error
    },
    validateForm: (formData) => {
        const nameError = userValidation.validateName(formData.name);
        const emailError = userValidation.validateEmail(formData.email);
        const addressError = userValidation.validateAddress(formData.address);

        return {
            name: nameError,
            email: emailError,
            address: addressError,
            isValid: !(nameError || emailError || addressError),
        };
    },
};

export default userValidation;