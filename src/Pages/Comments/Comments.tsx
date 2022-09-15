import { useCallback, useEffect, useMemo, useState } from "react"
import { getComments } from "../../Api/Api"
import { IComment } from "../../module"

const Comments =  () => {

    const localStorageComments = useMemo(() => localStorage.getItem('comments'), [])
    const [comments, setComments] = useState<IComment[]>(localStorageComments ? JSON.parse(localStorageComments) : [])

    const getDatas = useCallback( async () => {
        try {
            const Comments = await getComments()
            localStorage.setItem('comments', JSON.stringify(Comments))
            setComments(Comments)
        }catch {
            console.log('error');
        }
    }, [])

    useEffect(() => {
        if (!localStorageComments) {
            getDatas()
        }
    }, [])

    return (
        <div className="Comments">
            comments
        </div>
    )
}

export default Comments