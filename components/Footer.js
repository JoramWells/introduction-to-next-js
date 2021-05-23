import { GlobeIcon } from "@heroicons/react/solid"

function Footer(){
    return (
        <footer>
            <div>
                <p>
                    Kenya
                </p>
            </div>
            <div className="grid grid-cols-1">
            <div>
                <GlobeIcon className="h-10 w-10 mr-1 text-green-500"/>
                Copyright @2021
            </div>
            <div className="flex justify-center space-x-8 whitespace-nowrap">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
            </div>

        </footer>
    )
}
export default Footer