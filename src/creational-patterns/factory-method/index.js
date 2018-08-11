'use strict'

/**
 * We can have multiple different types of interviews.
 * We need a DevelopmentManager -> HiringManager for dev interviews
 * We need a MarketingManager -> HiringManager for marketing intern interviews
 * 
 * The thought process to figure out this design would probably go something like:
 * - OK, so we need a Hiring Manager class in order to do interviews
 * - wait, a Hiring Manager can be more specific, because I know we have to interview for 
 * development, marketing, and sales.
 * - so, we could have a DevelopmentManager, a MarketingManager and a SalesManager that are
 * all essentially HiringManagers as well.
 * - what do they all have in common?
 *   - they will all have to execute the interview (takeInterview() via HiringManager)
 * - what's different?
 *   - they will all have to ask questions, each different between different domains
 */

const devManager = new DevelopmentManager()
devManager.takeInterview() // Output: Asking about design patterns

const marketingManager = new MarketingManager()
marketingManager.takeInterview() // Output: Asking about community buildng.