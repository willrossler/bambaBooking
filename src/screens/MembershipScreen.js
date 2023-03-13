import React from "react";

const MembershipScreen = () => {
  return (
    <section className="wondrBG">
      <iframe
        id="wondr-2"
        className="wondr-iframe"
        src="https://bamba.wondr.se/register?category=6396139f-851c-4889-a1ac-10410a10016b"
        width="100%"
        height="2300px"
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

export default MembershipScreen;
