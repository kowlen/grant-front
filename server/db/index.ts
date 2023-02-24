import mongoose from "mongoose";

export default async () => {
    const config = useRuntimeConfig();

    mongoose
        .connect(config.MONGO_URI)
        .then(() => console.log('Connected DB'))
        .catch((e) => console.log(e))
}
