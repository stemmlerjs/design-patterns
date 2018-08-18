
/**
 * Let's now work on a concrete example so that we can apply what we learned
about the State pattern. Let's build a client TCP socket that does not fail when the
connection with the server is lost; instead, we want to queue all the data sent during
the time in which the server is ofﬂine and then try to send it again as soon as the
connection is re-established.
 */

 