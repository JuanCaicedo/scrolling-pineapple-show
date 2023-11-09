import Panel from "@/components/Panel";

export default function ScrollTextScene() {
  return (
    <>
      <style jsx>{`
        .text-container {
          display: flex;
          flex-direction: column;
          height: 100cqh;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;

          @container (min-width: 375px) {
            font-size: 32px;
          }
          @container (min-width: 425px) {
            font-size: 42px;
          }
          @container (min-width: 475px) {
            font-size: 54px;
          }
        }
      `}</style>
      <Panel skipSpacer pinSpacerHeight="200vh">
        <div className="text-container">
          <img className="scroll-image" src="/scroll.png" />
          <div>Scroll down.</div>
          <div>Don't go too fast!</div>
        </div>
      </Panel>
    </>
  );
}
