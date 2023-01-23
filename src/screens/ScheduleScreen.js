import React from "react";

const ScheduleScreen = () => {
  return (
    <section className="">
      <iframe
        id="wondr-2"
        className="wondr-iframe"
        src="https://bamba.wondr.se/schema/index/63061b9b-e11c-4f28-a1b2-006a0a10058e"
        width="100%"
        height="1500px"
        frameborder="0"
      ></iframe>
      <script
        src="https://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://anläggningsdomän.wondr.se/js/iframe/ie8.polyfils.min.js"
        type="text/javascript"
      ></script>
      <script
        src="https://anläggningsdomän.wondr.se/js/iframe/iframeResizer.min.js"
        type="text/javascript"
      ></script>
      <script
        src="https://anläggningsdomän.wondr.se/js/iframe/wondrv3_iframe.js?1"
        type="text/javascript"
      ></script>
    </section>
  );
};

export default ScheduleScreen;
