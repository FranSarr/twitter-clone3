import Tweet from "components/Tweet";

export default function Tweets({ tweets }) {
    if (!tweets) return null
    return (
        <>
        {Array.from(tweets).map((tweet, index) => (
            <Tweet key={index} tweet={tweet} />
        ))}
        </>
    )
}