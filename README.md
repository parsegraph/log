# parsegraph-log

This module provides logging functionality, with support for nested log statements.

    import log, { enableLogging, setLogSink } from "./index";

    const root = document.getElementById("demo");
    enableLogging();
    setLogSink((msg) => {
      root.appendChild(document.createTextNode(msg));
      root.appendChild(document.createElement("br"));
    });

    setInterval(()=>{
      log("Hello!" + new Date());
    }, 3000);
