import { useRouter } from 'next/router';

function Gmail() {
    const router = useRouter();
    return (
        <div className="bg-blue-50 h-screen">
            <h2
                onClick={() => router.push("/")}
                className="link text-blue-500 font-serif... font-medium text-lg border-blue
                text-center bg-blue-200 cursor-pointer py-3 ">Home</h2>
            <div>
                <h1 className="text-2xl text-center mt-72 text-green-500">Project in Progress!
                    <p className="text-blue-500">will attach Gmail page when it get Finished</p>
                    <p className="text-red-600">Expected by oct-30 2021</p>
                </h1>
            </div>
        </div>
    )
}

export default Gmail;
