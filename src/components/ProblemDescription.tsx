import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ProblemDescription() {
  return (
    <ScrollArea className="h-screen bg-zinc-900 text-zinc-100 p-6">
      <div className="max-w-3xl mx-auto">        
        <div className="flex space-x-2 mb-4">
          <Badge variant="secondary" className="bg-green-600 text-white">Easy</Badge>
          <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 hover:cursor-default">
            Topics
          </Button>
          <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 hover:cursor-default">
            Companies
          </Button>
          <Button variant="outline" size="sm" className="text-zinc-400 border-zinc-700 hover:cursor-default">
            Hint
          </Button>
          <Badge variant="secondary" className="bg-green-700 text-white rounded-full hover:cursor-default">Solved</Badge>
        </div>

        <p className="mb-4">
          Given an array of integers <code className="bg-zinc-800 px-1 rounded">nums</code> and an integer <code className="bg-zinc-800 px-1 rounded">target</code>, return <em>indices of the two numbers such that they add up to</em> <code className="bg-zinc-800 px-1 rounded">target</code>.
        </p>

        <p className="mb-4">
          You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.
        </p>

        <p className="mb-6">
          You can return the answer in any order.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Example 1:</h2>
            <pre className="bg-zinc-800 p-4 rounded">
              <code>
                {`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Example 2:</h2>
            <pre className="bg-zinc-800 p-4 rounded">
              <code>
                {`Input: nums = [3,2,4], target = 6
Output: [1,2]`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Example 3:</h2>
            <pre className="bg-zinc-800 p-4 rounded">
              <code>
                {`Input: nums = [3,3], target = 6
Output: [0,1]`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Constraints:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><code className="bg-zinc-800 px-1 rounded">2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
            <li><code className="bg-zinc-800 px-1 rounded">-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
            <li><code className="bg-zinc-800 px-1 rounded">-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
            <li><strong>Only one valid answer exists.</strong></li>
          </ul>
        </div>
      </div>
    </ScrollArea>
  )
}