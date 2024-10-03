import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemDescription from "./ProblemDescription";
import Coding from "./Coding";

const Workspace = () => {
  return (
    <div className="h-[calc(100vh-68px)]">
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <ProblemDescription/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75} className="bg-[#1e1e1e]">
            <Coding/>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </div>
  );
};

export default Workspace;
